import Button from "@/components/buttons/Button_Basic";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{data.title}</h1>
        <p className={styles.p}>{data.mission}</p>
        <p className={styles.p}>{data.action}</p>
        <Button title={data.btnName} link={data.btnLink} />
      </div>
    </div>
  );
}

const data = {
  title: "Home",
  mission:
    "At Well4Ward, our mission is to create autonomous yet interconnected cooperative communities, reclaiming society and shared resources to foster human well-being.",
  action:
    "We're constantly striving to grow our community and amplify our positive impact on society. Explore our ongoing projects to see how we're making a difference and discover ways to get involved!",
  btnName: "Our Projects",
  btnLink: "/projects",
};

const styles = {
  p: "text-gray-700 text-lg lg:text-2xl py-2 mb-4",
};
