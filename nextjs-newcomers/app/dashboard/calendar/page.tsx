// <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&showPrint=0&src=aGVsbG9Ad2lsdG9uaWFucy5vcmc&color=%23039BE5" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
export default async function Page() {

  return (
    <main className="h-full ">
<iframe className="h-full w-full" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&showPrint=0&src=aGVsbG9Ad2lsdG9uaWFucy5vcmc&color=%23039BE5" allowFullScreen={true}></iframe>
    </main>
  );
}