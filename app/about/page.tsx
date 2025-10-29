import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { AboutDocument } from '@/graphql';
import Article from '@/components/common/Article';

export default async function About() {
	const {
		about: { text, id, intro, image },
		draftUrl,
	} = await apiQuery(AboutDocument);

	return (
		<>
			<Article id={id} title={'About'} content={text} intro={intro} image={image as FileField} />
			<DraftMode url={draftUrl} path={'/about'} />
		</>
	);
}
