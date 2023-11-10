import { Card, CardBody } from "@nextui-org/card";
export default function status() {
  return (
    <div className="w-screen px-24">
      <Card className=" rounded-b-none bg-primary-50">
        <div className="py-10 ">
          <div className="flex flex-col align-middle justify-center gap-2">
            <h1 className="text-3xl">Overall Rating</h1>
            <h3 className="text-6xl uppercase font-bold">Insufficient</h3>
          </div>
        </div>
      </Card>
      <div className="flex flex-row flex-grow-1 pt-2 gap-2">
        <Card className="flex flex-col align-middle items-center justify-center w-1/4 grow  rounded-t-none">
          <CardBody>
            <div className="flex flex-col h-full text-center align-middle justify-center items-center">
              <h1>
                Policies and action
                <br />
                against fair share
              </h1>
              <h1 className="font-bold">INSUFFICIENT</h1>
              <h1>&lt;3°C WORLD</h1>
            </div>
          </CardBody>
        </Card>
        <Card className="flex flex-col align-middle items-center justify-center w-1/4 grow rounded-t-none">
          <CardBody>
            <div className="flex flex-col h-full text-center align-middle justify-center items-center">
              <h1>Conditional NDC target against modelled domestic pathways</h1>
              <h1 className="font-bold">1.5° GLOBAL LEAST COST</h1>
              <h1>&lt;1.5°C WORLD</h1>
            </div>
          </CardBody>
        </Card>
        <Card className="flex flex-col align-middle items-center justify-center w-1/4 grow  rounded-t-none">
          <CardBody>
            <div className="flex flex-col h-full text-center align-middle justify-center items-center">
              <h1>
                Unconditional NDC target
                <br />
                against fair share
              </h1>
              <h1 className="font-bold">INSUFFICIENT</h1>
              <h1>&lt;3°C WORLD</h1>
            </div>
          </CardBody>
        </Card>
        <Card className="flex flex-col align-middle items-center justify-center w-1/4 grow rounded-t-none">
          <CardBody>
            <div className="h-full flex flex-col text-center align-middle justify-center items-center">
              <h1>Climate finance</h1>
              <h1 className="font-bold">NOT APPLICABLE</h1>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
