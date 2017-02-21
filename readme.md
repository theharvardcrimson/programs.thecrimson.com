## Getting Started

Things you may need to install, with ``sudo`` or with ``-n /usr/local/bin`` attached if OSX complains about ``/usr/bin/``:

* ``gem install bundler``
* ``bundle install`` (installs all the required gems)

If any gem in particular gives you trouble after these two, you can try installing it directly with ``gem install [gemname]``.

Run ``jekyll serve`` to see the local changes, which will show up on refresh.

===========================

##Deployment

* Install s3_website with ``gem install s3_website``, using ``sudo`` if necessary. If you get an error with ``/usr/bin/``, tack on ``-n /usr/local/bin`` to the command.

* ``s3_website cfg create`` creates a new s3_website.yml. Put in the AWS credentials (same as with the normal website) and conferences.thecrimson.com as the bucket.

* ``s3_website cfg apply`` configures everything for you.

* ``s3_website push`` deploys the code to the website.

