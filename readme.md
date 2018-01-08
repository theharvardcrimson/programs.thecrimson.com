## Getting Started

The Harvard Crimson Journalism Conferences website is a static site that is generated using Ruby. So in order to make modifications to it and deploy it, you need to ensure that you have the latest version of `ruby` installed alongside the latest version of `gem` (the package manager for Ruby).

Once you've done that, add these two lines to the bottom of your `~/.bashrc`
```
export GEM_HOME=~/.gem
export GEM_PATH=~/.gem
```

Once you've done this, run the following commands:
* `source ~/.bashrc`
* `gem install bundler`
* `bundle install` (installs all the required gems)

If any gem in particular gives you trouble after these two, you can try installing it directly with `gem install [gemname]`.

Run `bundle exec jekyll serve` to see the local changes, which will show up on refresh.



## Deployment

* `s3_website` should already be installed as a result of the `bundle install` command above, but if it isn't then install it using ``gem install s3_website``.

* `bundle exec s3_website cfg create` creates a new s3_website.yml. Put in the AWS credentials (same as with the normal website) and conferences.thecrimson.com or programs.thecrimson.com as the bucket.

* `bundle exec s3_website cfg apply` configures everything for you.

* `bundle exec s3_website push` deploys the code to the website.
