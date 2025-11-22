import Text from "./components/text";

export default function App() {

  return (
    <>
      <div className="grid gap-10 place-items-center items-center h-screen bg-gray-800">
        <div className="flex flex-col gap-1">
          <Text variant="body-lg" className="text-gray-100">Hair day</Text>
          <Text variant="body-md">Hair day</Text>
          <Text variant="body-md-bold">Hair day</Text>
          <Text variant="body-sm">Hair day</Text>
          <Text variant="body-sm-bold">Hair day</Text>
        </div>
      </div>
    </>
  );
}

