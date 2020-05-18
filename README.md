# Unofficial New Relic dashboard repository

## Adding your own dashboard

1. [Fork the Github repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository)

2. [Clone your own repository to your local machine](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

3. Create a directory in the `dashboards` folder with the name of the dashboard you want to enter. For example: `RabbitMQ`, `APM Errors`, ..
4. Add a file called `dashboard.json` to your directory and add the JSON of your dashboard.

5. Create a `config.json` file with the following content:

```
{
    "name": "Name of your dashboard",
    "author": "Your name or email address"
}
```

6. Commit your changes `git add -A` and `git commit -m "My new dashboard"`. Change the `My new dashboard` with a description of the dashboard you added.

7. Push your changes to Github `git push`

8. [Create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) in the [parent repository](https://github.com/kidk/newrelic-dashboards/compare?expand=1).

9. Submit and wait for review. We will review as fast as we can, but it can sometimes take a day or two.

Thanks a lot for your submission!
