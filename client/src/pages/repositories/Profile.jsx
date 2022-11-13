import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImEarth } from "react-icons/im";

export function Profile() {
  const { reposData } = useSelector((state) => state.repo);
  const {
    name,
    avatarUrl,
    bio,
    location,
    repositories,
    followers,
    following,
    url,
    twitterUsername,
    websiteUrl,
  } = reposData;
  return (
    <li className="flex row-start-1 row-end-3 flex-col rounded border-[3px] gap-3 p-2 dark:border-darkv1">
      <div className="bg-lightv2 flex flex-col dark:text-lightv2 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-1 gap-4 dark:bg-darkv3 p-3 rounded">
        <img
          className="w-full 2xl:w-[120px] xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[120px] rounded 2xl:h-[120px] xl:h-[120px] lg:h-[120px] md:h-[120px] sm:h-[120px] h-[150px] object-cover object-top"
          src={avatarUrl}
          alt={avatarUrl}
        />
        <div className="flex flex-col">
          <span className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl dark:text-lightv1 font-medium ">
            {name}
          </span>
          <span className="text-base opacity-60 font-medium 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base">
            {bio}
          </span>
          <span className="mt-auto 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base opacity-60 font-medium">
            {location}
          </span>
        </div>
      </div>
      <div className="flex gap-4 flex-1 text-darkv3 dark:text-lightv2/80">
        <div className="flex-1 dark:bg-darkv3 bg-lightv2 p-3 rounded font-medium flex flex-col gap-1 text-lg">
          <div className="flex justify-between">
            <span>Takipçiler</span>
            <span>{followers.totalCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Takip edilen</span>
            <span>{following.totalCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Repolar</span>
            <span>{repositories.totalCount}</span>
          </div>
        </div>
        <div className="dark:bg-darkv3 bg-lightv2 flex flex-col justify-between p-3 rounded text-xl">
          <a target="_blank" href={url}>
            <FaGithub />
          </a>
          <a target="_blank" href={`https://twitter.com/${twitterUsername}`}>
            <AiOutlineTwitter />
          </a>
          <a target="_blank" href={websiteUrl}>
            <ImEarth />
          </a>
        </div>
      </div>
    </li>
  );
}
