import RootLayout from "@/layout/RootLayout";

const PcbuilderPage = () => {
  return (
    <div>
      
    </div>
  );
};

export default PcbuilderPage;

PcbuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
