# External Docs - Figma Plugin Experiment
<img src="/static/plugin-experiment-docs.gif" width=50% height=50%>

A plugin experiment to show related external documentation for a selected component/instance.

## How it works
The plugin reads the component description of the currently selected component and searches for the term `@api` (this could be anything). If there's a match, it uses the component name to serve the corresponding page of the documentation (by simple URL matching).

I've used Github Primer and the Primer docs as an example as this requires cross-origin requests and not a lot of public styleguides have this enabled :)

## Thoughts
This is a very simple approach to a very powerful concept. A lot of design systems and/or dev teams have existing docs that would be valuable to reference while designing - why not pull them straight in!

There's a lot of fragility and room for human error by matching text strings and I could imagine a much more robust approach with:
- uuid references instead of text
- actual API request for urls
- two-way data to populate the Figma canvas with useful info from the docs
- local and external docs

## Next steps
I don't have any further plans for this experiment - but perhaps it will be useful for someone else!

## Thanks
- [@thomas-lowry](https://github.com/thomas-lowry) and the invaluable [Figma Plugin Boilerplate (FPB)](https://github.com/thomas-lowry/figma-plugin-boilerplate#intro)
- The Primer team for their amazing styleguide and their [Primer Web Figma Community File](https://www.figma.com/community/file/854767373644076713)
