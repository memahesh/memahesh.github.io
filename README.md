# myfolio

Built in generic fashion to be used by anyone. Just update `content.json` and `npm run deploy`

- `npm start` - This will spawn a development server with a default port of `1234`.
- `npm run build` - This will output a production build in the `dist` directory.

## Deployment
Run `npm run deploy` to push the `dist/` to `gh-pages` branch which deploys to [Portfolio](https://maheshmedam.github.io/myfolio)


## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```




## Todos

 - [ ] Add Projects Section
 - [x] Change Image Styling ###Done
 - [x] Adding Timeline as Journey ###Done
 - [x] Fixing Footer URLs ###Done
 - [x] Fixing Contact spacing ###Done
 - [x] Fixing Testimonial ###Done
 - [ ] Adding Blog button and point to medium ###To Be Done Later
 - [ ] Add more testimonials
 - [ ] Add Loader
 - [ ] Update README properly
 - [ ] Enabling Media Queries and adjust all elements accordingly
 - [ ] Adding Optional Sections
