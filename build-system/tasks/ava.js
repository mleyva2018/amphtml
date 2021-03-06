/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const ava = require('gulp-ava');
const gulp = require('gulp-help')(require('gulp'));
const {isTravisBuild} = require('../travis');

/**
 * Runs ava tests.
 */
function runAvaTests() {
  return gulp.src([
    'csvify-size/test.js',
    'get-zindex/test.js',
    'prepend-global/test.js',
  ])
      .pipe(ava({silent: isTravisBuild()}));
}

gulp.task('ava', 'Runs ava tests for gulp tasks', runAvaTests);
