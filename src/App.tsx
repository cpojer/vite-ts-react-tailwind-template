const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="text-pink-500 dark:text-pink-400 underline hover:no-underline"
    {...props}
  />
);

export default function App() {
  return (
    <div className="mt-10 mx-auto w-8/12 my-8 p-4 rounded border border-gray-200 shadow-md dark:border-neutral-600 dark:shadow-none dark:bg-neutral-800">
      <h1 className="text-4xl mb-4">Welcome</h1>
      <p className="my-4">
        <em>Minimal, fast, sensible defaults.</em>
      </p>
      <p className="my-4">
        Using <Link href="https://vitejs.dev/">Vite</Link>,{' '}
        <Link href="https://reactjs.org/">React</Link>,{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link> and{' '}
        <Link href="https://tailwindcss.com/">Tailwind</Link>.
      </p>
      <p className="my-4">
        Change{' '}
        <code className="border border-1 px-1 2py-1 rounded bg-neutral-100 dark:bg-neutral-700 border-pink-500 dark:border-pink-400 text-pink-500 dark:text-pink-400 font-mono">
          src/App.tsx
        </code>{' '}
        for live updates.
      </p>
    </div>
  );
}
