import * as mavenVersioning from '../../versioning/maven';
import { extractPackageFile } from './extract';

export { extractPackageFile };

export const autoReplace = true;

export const defaultConfig = {
  fileMatch: ['(^|/)deps\\.edn$'],
  versioning: mavenVersioning.id,
};
