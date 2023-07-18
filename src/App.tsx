function App() {
  return (
    <div className="bg-white bg-[url('./images/bg-header-mobile.png')] bg-contain bg-no-repeat sm:bg-[url('./images/bg-header-desktop.png')]">
      <div className="container mx-auto px-8">
        <main className="">
          <section className="flex flex-col items-center gap-8 pt-32 text-center">
            <img
              src="/src/images/logo.svg"
              alt="Clipboard logo"
              className="mb-8"
            />
            <h2 className="text-3xl font-bold text-color-title">
              A history of everything you copy
            </h2>
            <p className="text-base text-color-text">
              Clipboard allows you to track and organize everything you copy.s
              Instantly access your clipboard on all your devices.
            </p>
            <button
              className="w-full rounded-full border-b-4 border-b-black/25 bg-primary p-4
              text-lg text-white shadow-lg shadow-primary/30 transition duration-150 hover:opacity-70
              active:translate-y-[2px] active:border-b-transparent sm:w-auto sm:px-8"
            >
              Download for IOS
            </button>
            <button
              className="w-full rounded-full border-b-4 border-b-black/25 bg-secundary p-4
              text-lg text-white shadow-lg shadow-secundary/30 transition duration-150 hover:opacity-70
              active:translate-y-[2px] active:border-b-transparent sm:w-auto sm:px-8"
            >
              Download for Mac
            </button>
          </section>
          <section className="mt-40 flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold text-color-title">
              Keep track of your snippets
            </h2>
            <p className="text-base text-color-text">
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </section>
          <section className="mt-40 flex flex-col gap-16 text-center">
            <div>
              <img src="/src/images/image-computer.png" alt="computer" />
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-bold text-color-title">
                Quick Search
              </h3>
              <p className="text-base text-color-text">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-bold text-color-title">
                iCloud Sync
              </h3>
              <p className="text-base text-color-text">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-bold text-color-title">
                Complete History
              </h3>
              <p className="text-base text-color-text">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
