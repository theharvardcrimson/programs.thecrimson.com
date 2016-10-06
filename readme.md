Getting Started

=====

Install jekyll

The local changes can be viewed with ``jekyll serve``

Deployment

===

Install s3_website. 

``s3_website cfg create`` creates a new s3_website.yml file where you can put yoyour AWS credentials and s3 bucket names.

``s3_website cfg apply`` configures everything for you.

``s3_website push`` deploys the code to the website.

