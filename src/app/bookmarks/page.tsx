export default function BookmarksPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-4xl font-medium tracking-tight md:text-5xl">
          Bookmarks
        </h1>
        <p className="text-muted-foreground">
          A collection of interesting links, articles, and resources I&apos;ve
          saved
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-medium md:text-3xl">Tools</h2>

        <ul className="space-y-2">
          <li>
            <a href="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </a>
          </li>
          <li>
            <a href="https://motion.dev/" target="_blank">
              Motion
            </a>
          </li>
          <li>
            <a href="https://motion-primitives.com/" target="_blank">
              Motion-Primitives
            </a>
          </li>
          <li>
            <a href="https://magicui.design/" target="_blank">
              Magic UI
            </a>
          </li>
          <li>
            <a href="https://ui.aceternity.com/" target="_blank">
              Aceternity UI
            </a>
          </li>
          <li>
            <a href="https://tweakcn.com/" target="_blank">
              tweakcn
            </a>
          </li>
          <li>
            <a href="https://tremor.so/" target="_blank">
              Tremor
            </a>
          </li>
          <li>
            <a href="https://patterncraft.fun/" target="_blank">
              Patterncraft
            </a>
          </li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-medium md:text-3xl">Videos</h2>

        <ul className="space-y-2">
          <li>
            <a
              href="https://youtu.be/TrtQWsSrB_c?si=V66UIXh5TNbfeuAV"
              target="_blank"
            >
              This is how I Made My Next.js Application 10x Faster
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
