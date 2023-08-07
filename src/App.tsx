function App() {
  return (
    <div className="bg-white bg-[url('./images/bg-header-mobile.png')] bg-contain bg-no-repeat sm:bg-[url('./images/bg-header-desktop.png')]">
      <main className="container mx-auto max-w-7xl px-8 md:px-0">
        <section className="flex flex-col items-center gap-8 pt-32 text-center">
          <img
            src="/src/images/logo.svg"
            alt="Clipboard logo"
            className="mb-8"
          />
          <h2 className="text-3xl font-bold text-color-title lg:text-5xl">
            A history of everything you copy
          </h2>
          <p className="mb-8 max-w-3xl text-base text-color-text lg:text-xl">
            Clipboard allows you to track and organize everything you copy.s
            Instantly access your clipboard on all your devices.
          </p>
          <div className="flex w-full flex-col gap-8 text-white sm:flex-row sm:justify-center">
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
              active:translate-y-[2px] active:border-b-transparent  sm:w-auto sm:px-8"
            >
              Download for Mac
            </button>
          </div>
        </section>
        <section className="mt-40 flex flex-col gap-8 text-center">
          <h2 className="text-3xl font-bold text-color-title lg:text-4xl">
            Keep track of your snippets
          </h2>
          <p className="mx-auto max-w-3xl text-base text-color-text lg:text-xl">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </section>
        <section className="relative mt-32 flex flex-col gap-32 text-center md:flex-row md:text-left">
          <div className="md:w-1/2">
            <img
              src="/src/images/image-computer.png"
              alt="computer"
              className="-top-10 right-[50%] md:absolute"
            />
          </div>
          <div className="flex flex-col gap-20 md:w-1/2 md:px-20">
            <div>
              <h3 className="mb-5 text-2xl font-bold text-color-title lg:text-3xl">
                Quick Search
              </h3>
              <p className="text-base text-color-text lg:text-xl">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-bold text-color-title lg:text-3xl">
                iCloud Sync
              </h3>
              <p className="text-base text-color-text lg:text-xl">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-bold text-color-title lg:text-3xl">
                Complete History
              </h3>
              <p className="text-base text-color-text lg:text-xl">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-80 text-center">
          <h2 className="mb-8 text-3xl font-bold text-color-title lg:text-4xl">
            Access Clipboard anywhere
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-base text-color-text lg:text-xl">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img
            src="/src/images/image-devices.png"
            alt="devices"
            className="mx-auto"
          />
        </section>
        <section className="my-40 text-center">
          <h2 className="mb-4 text-3xl font-bold text-color-title lg:text-4xl">
            Supercharge your workflow
          </h2>
          <p className="mb-16 text-base text-color-text lg:text-xl">
            We’ve got the tools to boost your productivity.
          </p>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-6">
            <div>
              <img
                src="/src/assets/icon-blacklist.svg"
                alt=""
                className="mx-auto mb-12"
              />
              <h3 className="mb-4 text-3xl font-bold text-color-title">
                Create blacklists
              </h3>
              <p className="text-base text-color-text lg:text-xl">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div>
              <img
                src="/src/assets/icon-text.svg"
                alt=""
                className="mx-auto mb-12"
              />
              <h3 className="mb-4 text-3xl font-bold text-color-title">
                Plain text snippets
              </h3>
              <p className="text-base text-color-text lg:text-xl">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div>
              <img
                src="/src/assets/icon-preview.svg"
                alt=""
                className="mx-auto mb-12"
              />
              <h3 className="mb-4 text-3xl font-bold text-color-title">
                Sneak preview
              </h3>
              <p className="mb-16 text-base text-color-text lg:text-xl">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-32 flex flex-col flex-wrap items-center justify-center gap-24 sm:flex-row">
          <img src="/src/images/logo-google.png" alt="google" />
          <img src="/src/images/logo-ibm.png" alt="ibm" />
          <img src="/src/images/logo-microsoft.png" alt="microsoft" />
          <img src="/src/images/logo-hp.png" alt="hp" />
          <img
            src="/src/images/logo-vector-graphics.png"
            alt="vector graphics"
          />
        </section>
        <section className="mb-32 flex flex-col gap-8 text-center">
          <h2 className="text-3xl font-bold text-color-title lg:text-4xl">
            Clipboard for iOS and Mac OS
          </h2>
          <p className="mx-auto max-w-3xl text-base text-color-text lg:text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <div></div>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-between gap-16 bg-color-text/10 px-20 py-10 md:flex-row">
        <img src="/src/images/logo.svg" alt="Clipboard logo" />
        <nav className="grid grid-cols-1 justify-center gap-x-32 gap-y-8 text-xl text-color-title hover:cursor-pointer md:grid-cols-3 md:flex-row md:justify-items-start [&>a:hover]:text-primary">
          <a>FAQs</a>
          <a>Contact Us</a>
          <a>Privacy Policy</a>
          <a>Press Kit</a>
          <a>Install Guide</a>
        </nav>
        <div className="flex gap-10">
          <img src="/src/assets/icon-facebook.svg" alt="" />
          <img src="/src/assets/icon-twitter.svg" alt="" />
          <img src="/src/assets/icon-instagram.svg" alt="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
