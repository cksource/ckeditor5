/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class Chart extends Plugin {
	init() {
		console.log( 'Chart#init() got called' );
	}
}
