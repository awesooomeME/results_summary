import Subject from "@/components/subject"

export default function Home() {
  const subjects = [["reaction", 80], ["memory", 92], ["verbal", 61], ["visual", 72]] as const

  return (
    <main className="min-h-screen grid place-content-center bg-pale_blue_neutral">
      <article className="bg-white flex flex-col md:flex-row md:rounded-3xl max-w-[900px]
        shadow-lg">
        <section className="flex flex-col items-center bg-background_gradient rounded-b-3xl
          py-12 px-28 text-center gap-4 text-white_neutral md:flex-1 md:rounded-3xl
          md:px-10 md:justify-center">
          <h2 className="text-white_neutral/70 text-xl">
            Your Result
          </h2>
          <div className="bg-background_circle rounded-full p-10 px-12">
            <h1 className="text-6xl font-extra_heavy">
              76
            </h1>
            <p className="text-white_neutral/40">
              of 100
            </p>
          </div>
          <h2 className="text-2xl font-heavy">
            Great
          </h2>
          <p className="text-white_neutral/70">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="p-9 flex flex-col gap-7 flex-1">
          <h2 className="font-heavy text-xl">
            Summary
          </h2>
          <div className="grid gap-4">
            {subjects.map((subject) => {
              return (
                <Subject subject={subject[0]} score={subject[1]} key={subject[0]}/>
              )
            })}
            <button type="button" className="text-white_neutral bg-dark_gray_blue_neutral
            w-full rounded-full py-4 text-xl hover:bg-background_gradient">
              Continue
            </button>
          </div>
        </section>
      </article>
    </main>
  )
}
