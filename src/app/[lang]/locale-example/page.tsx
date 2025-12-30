import { getDictionary } from '@/features/internationalization/get-dictionaries';
import { Locale } from '@/features/internationalization/i18n.config';

import Counter from './counter-component';

interface pageProps {
  params: Promise<{ lang: string }>;
}

const page = async ({ params }: pageProps) => {
  const { lang } = await params;
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  return (
    <div>
      <h1>Current Language: {lang}</h1>
      <p>This text is rendered on the server: {dictionary.landing.welcome}</p>
      <Counter />
    </div>
  );
};

export default page;
