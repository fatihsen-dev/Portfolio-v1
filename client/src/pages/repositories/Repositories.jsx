import { useSelector, useDispatch } from "react-redux";
import { setReposData } from "../../store/repoReducer";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { Profile } from "./Profile";
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export function Repositories() {
  const [repoNotFound, setRepoNotFound] = useState(false);

  const { reposData } = useSelector((state) => state.repo);
  const dispatch = useDispatch();

  useEffect(() => {
    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem("token");
      return {
        headers: {
          ...headers,
          authorization: token
            ? `Bearer ${token}`
            : "Bearer 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",
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    client
      .query({
        query: gql`
          query {
            viewer {
              name
              login
              bio
              avatarUrl
              location
              url
              twitterUsername
              websiteUrl
              followers {
                totalCount
              }
              following {
                totalCount
              }
              repositories(first: 20) {
                nodes {
                  name
                  stargazerCount
                  url
                  description
                  languages(first: 4) {
                    edges {
                      node {
                        name
                        color
                      }
                    }
                  }
                }
                totalCount
              }
            }
          }
        `,
      })
      .then((result) => dispatch(setReposData(result.data.viewer)))
      .catch((err) => {
        console.log(err);
        setRepoNotFound(true);
      });
  }, []);
  return (
    <div className="h-full overflow-auto 2xl:py-10 xl:py-10 lg:py-10 md:py-10 sm:py-5 sm:px-5 py-5 px-5">
      <Helmet>
        <title>Repolarım - Fatih Şen</title>
      </Helmet>
      <div className="container mx-auto h-full">
        {reposData ? (
          <>
            <ul className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2  repositories-list gap-5">
              <Profile />
              {reposData.repositories.nodes.map((element, index) => (
                <div
                  key={index}
                  className="shadow-md p-2 border-[3px] border-darkv1 rounded"
                >
                  <li className="bg-inherit flex flex-col rounded-sm h-full gap-1 bg-[#222222] p-2">
                    <a
                      className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg font-semibold"
                      target="_blank"
                      href={element.url}
                    >
                      {element.name}
                    </a>
                    {element.description && (
                      <span className="text-white/50">
                        {element.description}
                      </span>
                    )}
                    <div className="my-4"></div>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex gap-3" key={index}>
                        {element.languages.edges.map((e, i) => (
                          <span
                            className="font-medium opacity-90"
                            style={{ color: e.node.color }}
                            key={i}
                          >
                            {e.node.name}
                          </span>
                        ))}
                      </div>
                      <a
                        target="_blank"
                        href={element.url}
                        className="flex items-center gap-1 text-lg transition-colors hover:text-yellow-400"
                      >
                        <AiOutlineStar /> {element.stargazerCount}
                      </a>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
            <div className="py-5"></div>
          </>
        ) : (
          <div
            style={repoNotFound ? { display: "flex" } : null}
            className="h-full w-full hidden justify-center items-center flex-col gap-3"
          >
            <h1 className="text-4xl font-semibold">Repolara ulaşılamadı</h1>
            <a
              target="_blank"
              href="https://www.github.com/fatihydrm"
              className="text-xl flex items-center gap-2 font-medium text-blue-500/70"
            >
              <FaGithub />
              <span>Github</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
