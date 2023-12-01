import { writeFile } from 'fs';

import 'dotenv/config';

const targetPath = `./src/environments/environment.prod.ts`;
const environmentFileContent = `
export const environment = {
    production: true,
    firebaseConfig: "${process.env.FIREBASE_WEB_CONFIG}",
    authEmail: "${process.env.AUTH_EMAIL}",
    authPass: "${process.env.AUTH_PASS}",
    emailUserId: 'Wy0XJ_0uBsfzHfxnW',
    emailTemplateId: 'template_g3njgc4',
    emailServiceId: 'service_qevbq8g',
}`;

writeFile(targetPath, environmentFileContent, function (err) {
  if (err) console.log(err);
  console.log(`Wrote variables to ${targetPath}`);
});
