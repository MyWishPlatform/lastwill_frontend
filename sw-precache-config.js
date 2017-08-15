/**
 * lastwill
 * Created by andreykubasov on 15.08.17.
 */
module.exports = {
  staticFileGlobs: [
    'dist/**.js',
    'dist/**.css',
    'dist/assets/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};
