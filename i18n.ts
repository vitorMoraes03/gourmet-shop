import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => ({
  content: (await import(`./content/${locale}.json`)).default
}));