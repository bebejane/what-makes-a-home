import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { BookDocument, } from '@/graphql';
import Article from '../../components/common/Article';

export default async function Page() {

  const { book, draftUrl } = await apiQuery<BookQuery, BookQueryVariables>(BookDocument)

  return (
    <>
      <Article
        title={book.title}
        content={book.text}
        intro={book.intro}
        image={book.image as FileField}
      />
      <DraftMode url={draftUrl} path="/book" />
    </>
  )
}