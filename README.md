# PhoenixAngular

Getting Started
---------------

The first thing you want to do is copy the `phoenix-angular` directory and change the name to something else (like, say, `my-awesome-app`), and then you'll need to do a three-step find and replace on the name in all the templates.

1. Search for `phoenix_angular` to capture the configs.
2. Search for `PhoenixAngular` to capture all the function names.
3. Search for `Phoenix Angular` to capture all static text.

OR

* Search for: `phoenix_angular` and replace with: `my-awesome-app`.
* Search for: `PhoenixAngular` and replace with: `MyAwesomeApp`.
* Search for: `Phoenix Angular` and replace with: `My Awesome App`.


Next, update or delete this readme.

Now you're ready to go! May the Phoenix and Angular be with you:)

Good luck!

To start your Phoenix app:

  1. Clean out artifact dependencies and install fresh dependencies `rm -rf _build deps mix.lock && mix deps.clean --unused && mix deps.get`
  2. Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  3. Install npm packages `npm install`
  4. Compile Sass and JavaScript files `gulp build`
  5. Start Phoenix endpoint with `mix phoenix.server`


Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: http://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
