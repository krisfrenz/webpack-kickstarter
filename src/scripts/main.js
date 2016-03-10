// this is the import telling webpack to compile the main SCSS file
import '../styles/main.scss';

// this import will be immediately exectued because of the way the
// default export is written (look it up in the `headline` folder)
import 'headline';

import {hello} from 'hello';
console.log(hello());
