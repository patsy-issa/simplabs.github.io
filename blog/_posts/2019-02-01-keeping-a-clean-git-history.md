---
layout: article
section: Blog
title: "Keeping a clean git history"
author: "Chris Manson"
github-handle: mansona
twitter-handle: real_ate
topic: misc
---

This topic was inspired by some of my recent pairing sessions with [Tobias Bieniek](https://twitter.com/tobiasbieniek) and has become quite useful while working with open source development. If you haven't already checked out [Tobias' blog on Open Source maintenance](../2018/11/27/open-source-maintenance/index.html) I would highly recommend checking it out 🎉

<!--break-->

## Git workflows

Git can sometimes be a bit complex to get your head around. For most of us we learn get to a point where we're happy to use it day to day and then stick to what we know and try to keep our head down. Most of the time this works out, but then every so often we do something wrong or someone asks us to rebase or "squash" something and we either freak out or mess up our git repo 😫 This is such a common feeling that sites like [Oh shit, git!](https://ohshitgit.com/) have cropped up to help us _get out of our messes_.

I have always been a visual learner so when I think about git I very much **see** the branching model in my head. Tehre are lots of ways to think about branching or to learn it... (https://learngitbranching.js.org/) (maybe official docs)

Screenshot of branching things

Talk a little bit about git flow and github flow

## Smallest possible change mental model

In open source we have always gotten a large number of PRs out of the blue, and some of them are awesome but sometimes you get the dredded "rewrite all your code" PRs. These are often very hard to ever get merged (if you would even want to) because they end up touching too much stuff.

I like to say to people interested in getting involved in OSS "the smaller the PR the more likely it will be to get merged". I try to take this into account when I'm working on some big changes and so smaller iterations of change... maybe talk about guides?

Maybe comment about number of **changes** in the PR (as reported by github) with a screenshot. This can lead into the next section

## Smallest number of commits

Assume you now have a good small PR (when thinking about changes) but it took you many work-in-progress commits to get there. Here is an example PR of what I mean by too many commits: https://github.com/ember-learn/guides-app/pull/19 don't worry, it's my own PR! I'm not calling out someone for their terrible work 😂

If you look at the list of commits you will see a lot of "testing blah" and "reverting previous test"

Screenshot

this isn't helpful for people when reviewing. If you submitted a PR like this to an established open source project you are likely to get a request to "squash the commits".

Small asside on what it means to squash the commits with screenshots.

I like to maintain my git history closest to what the **true** history of the work actually is. I like to have branches and see the merge commit, so it's a good thing to try and minimise the number of commits if the maintainers are going to ask to squash over a certain number.

how can we do that

## Rebasing, fixup and serious git-fu

note about this being expert but not out of reach for everyone!

maybe a note about how Tobi mentioned that he reviews large PRs one commit at a time...

making a commit history in PR only ever **add** on previous things.

mention Fork and tobi's article again. **Visualise**.

## Case study

cleaning up that pr

## Summary

While this is completely optional it can be useful to help you think about your workflow etc. etc. get awesome things done!

If you need help with any of these topics or if you have
questions we encourage you to [contact us](https://simplabs.com/contact/)!
