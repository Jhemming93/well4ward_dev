import Button from "@/components/buttons/Button_Basic";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-first py-2">
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
    "Our mission is to build autonomous but interconnected co-operative communities to reclaim society and shared resources for human well being.",
  action:
    "Well4Ward is always looking to build our community and expand the influence that we have on society. Come check out our ongoing projects to learn more about what we are doing for the community.",
  btnName: "Our Projects",
  btnLink: "/projects",
};

const styles = {
  p: "text-gray-700 text-lg lg:text-2xl",
};
