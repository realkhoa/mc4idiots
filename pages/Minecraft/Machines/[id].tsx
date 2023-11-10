import path from "path";
import { readMd } from "@/commons/apis/readMd";
import { getFileList } from "@/commons/apis/getFileList"
import MainLayout from "@/commons/layout/mainLayout";
import IPageData from "@/commons/types/IPageData";

interface IMinecraftFarmStaticProps {
  page: IPageData
}

interface IParams {
  params: {
    id: string
  }
}

const mdPath = path.resolve('mds/Minecraft/Machines/');

export default function Farm(props: IMinecraftFarmStaticProps) {
  return <MainLayout breadcrumbs={['Minecraft', 'Machines', props.page.title]} theme="dark" title={props.page.title}>
    <div dangerouslySetInnerHTML={{ __html: props.page.content }} />
  </MainLayout>;
}

export async function getStaticPaths() {
  const paths = getFileList(mdPath);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(params: IParams) {
  const page: IPageData = await readMd(path.join(mdPath, params.params.id));
  return {
    props: {
      page,
    },
  };
}