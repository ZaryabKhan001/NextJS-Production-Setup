import { getDictionary } from '@/features/internationalization/get-dictionaries';
import { Locale } from '@/features/internationalization/i18n.config';

import Counter from './counter-component';

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = (await params) as { lang: string };
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  return (
    <div>
      <h1>Current Language: {lang}</h1>
      <p>This text is rendered on the server: {dictionary.landing.welcome}</p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
};

export default page;
