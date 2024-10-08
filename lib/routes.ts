type Routes = {
  [key: string]: Route
}

type Route = {
  path: ((item?: any) => Promise<string | null>)
  typeName: string
}

const routes: Routes = {
  "start": {
    typeName: "StartRecord",
    path: async (item) => '/'
  },
  "venue": {
    typeName: "VenueRecord",
    path: async (item) => `/visit`
  },
  "exhibition": {
    typeName: "ExhibitionRecord",
    path: async (item) => `/exhibition`
  },
  "about": {
    typeName: "AboutRecord",
    path: async (item) => `/about`
  },
  "book": {
    typeName: "BookRecord",
    path: async (item) => `/book`
  }
}

export const buildRoute = async (model: string, item?: any): Promise<string> => {
  if (!routes[model]) throw new Error(`Invalid model: ${model}`)
  return await routes[model].path(item)
}

export const recordToRoute = async (record: any): Promise<string> => {
  const { __typename } = record
  const model = Object.keys(routes).find(key => routes[key].typeName === __typename)
  if (!model) throw new Error(`Invalid record: ${__typename}`)
  return await buildRoute(model, record)
}

export default routes