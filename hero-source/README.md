Hero renderer adapted from https://github.com/huanglizhuo/iPhoneDuoMock (MIT).
See ../assets/DUO-NOTICES.txt and APPLE_VIEWER.md for renderer/model provenance.
The static website requires no build step. hero-three.js is already bundled.
To rebuild: npm ci --ignore-scripts; npx esbuild src/hero.ts --bundle --minify --format=esm --outfile=../assets/hero-three.js
Screens in ../assets/hero are captured from the running Passfolio App using an isolated demo session, populated with travel photos and tickets. They are screenshots, not a live App session. Folding is a Three.js model animation.
