import { Card, CardBody } from "@nextui-org/card";
import content from "./overviewContent";
export default function Overview() {
  return (
    <div className="flex flex-col gap-4 mx-24 my-5">
      {content.map((section, index) => (
        <div className="flex flex-row" key={index}>
          <div className="flex flex-col justify-center align-middle w-1/3 p-10">
            <h1>{section.title}</h1>
            <h1 className="font-bold text-2xl">{section.status}</h1>
          </div>
          <Card className="w-2/3">
            <div className="flex flex-col">
              <CardBody className="flex flex-col gap-4 p-5">
                {section.content.map((paragraph, i) => (
                  <p className="text-justify" key={i}>
                    {paragraph}
                  </p>
                ))}
              </CardBody>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
