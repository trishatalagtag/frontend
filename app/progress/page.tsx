import Overview from "./overview/page";
import Status from "./status/page";
export default function DocsPage() {
  return (
    <>
      <div className={`pt-24`}>
        <Status />
        <Overview />
      </div>
    </>
  );
}
