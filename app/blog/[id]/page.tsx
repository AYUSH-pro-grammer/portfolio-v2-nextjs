"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import styles from "./blogDetail.module.css";

export default function BlogDetail() {
    const params = useParams();
    const id = params.id;

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(
                    `http://127.0.0.1:8000/blog/details/${id}`,
                    {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                        },
                    }
                );

                const respData = await resp.json();
                setData(respData);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    function getYoutubeEmbedUrl(url: string) {
        try {
            const parsed = new URL(url);

            if (parsed.hostname.includes("youtu.be")) {
                return `https://www.youtube.com/embed/${parsed.pathname.replace("/", "")}`;
            }

            const videoId = parsed.searchParams.get("v");

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }

            return "";
        } catch {
            return "";
        }
    }

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <main className={styles.container}>
            {data.map((item) => {
                switch (item.type) {
                    case "heading":
                        return (
                            <h1
                                key={item.id}
                                className={styles.heading}
                            >
                                {item.data.text}
                            </h1>
                        );

                    case "paragraph":
                        return (
                            <p
                                key={item.id}
                                className={styles.paragraph}
                            >
                                {item.data.text}
                            </p>
                        );

                    case "image":
                        return (
                            <figure key={item.id}>
                                <img
                                    src={item.data.src}
                                    alt={item.data.alt}
                                    className={styles.image}
                                />

                                {item.data.caption && (
                                    <figcaption className={styles.caption}>
                                        {item.data.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case "gallery":
                        return (
                            <div
                                key={item.id}
                                className={styles.gallery}
                            >
                                {item.data.images?.map(
                                    (img: any, i: number) => (
                                        <img
                                            key={i}
                                            src={img.src}
                                            alt={img.alt}
                                        />
                                    )
                                )}
                            </div>
                        );

                    case "code":
                        return (
                            <pre
                                key={item.id}
                                className={styles.code}
                            >
                                <code>{item.data.code}</code>
                            </pre>
                        );

                    case "quote":
                        return (
                            <blockquote
                                key={item.id}
                                className={styles.quote}
                            >
                                <p>{item.data.text}</p>
                                <footer>{item.data.author}</footer>
                            </blockquote>
                        );

                    case "checklist":
                        return (
                            <ul
                                key={item.id}
                                className={styles.checklist}
                            >
                                {item.data.items?.map(
                                    (entry: any, i: number) => (
                                        <li key={i}>
                                            <input
                                                type="checkbox"
                                                checked={entry.checked}
                                                readOnly
                                            />
                                            <span>{entry.text}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        );

                    case "ordered_list":
                        return (
                            <ol
                                key={item.id}
                                className={styles.list}
                            >
                                {item.data.items?.map(
                                    (text: string, i: number) => (
                                        <li key={i}>{text}</li>
                                    )
                                )}
                            </ol>
                        );

                    case "unordered_list":
                        return (
                            <ul
                                key={item.id}
                                className={styles.list}
                            >
                                {item.data.items?.map(
                                    (text: string, i: number) => (
                                        <li key={i}>{text}</li>
                                    )
                                )}
                            </ul>
                        );

                    case "youtube":
                        return (
                            <iframe
                                key={item.id}
                                src={getYoutubeEmbedUrl(
                                    item.data.url
                                )}
                                className={styles.youtube}
                                allowFullScreen
                            />
                        );

                    case "divider":
                        return (
                            <hr
                                key={item.id}
                                style={{
                                    borderTop:
                                        item.data.style,
                                    width:
                                        item.data.width,
                                }}
                            />
                        );

                    case "timeline":
                        return (
                            <div
                                key={item.id}
                                className={styles.timeline}
                            >
                                {item.data.items?.map(
                                    (entry: any, i: number) => (
                                        <div key={i}>
                                            <h3>
                                                {entry.title}
                                            </h3>
                                            <small>
                                                {entry.date}
                                            </small>
                                            <p>
                                                {
                                                    entry.description
                                                }
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        );

                    case "faq":
                        return (
                            <div
                                key={item.id}
                                className={styles.faq}
                            >
                                {item.data.items?.map(
                                    (entry: any, i: number) => (
                                        <details key={i}>
                                            <summary>
                                                {
                                                    entry.question
                                                }
                                            </summary>
                                            <p>
                                                {
                                                    entry.answer
                                                }
                                            </p>
                                        </details>
                                    )
                                )}
                            </div>
                        );

                    case "banner":
                        return (
                            <section
                                key={item.id}
                                className={styles.banner}
                                style={{
                                    background:
                                        item.data.bg_color,
                                }}
                            >
                                <h2>
                                    {item.data.title}
                                </h2>

                                <p>
                                    {
                                        item.data.subtitle
                                    }
                                </p>

                                <a
                                    href={
                                        item.data
                                            .button_link
                                    }
                                >
                                    {
                                        item.data
                                            .button_text
                                    }
                                </a>
                            </section>
                        );

                    case "table":
                        return (
                            <div
                                key={item.id}
                                className={
                                    styles.tableWrap
                                }
                            >
                                <table>
                                    <thead>
                                        <tr>
                                            {item.data.headers?.map(
                                                (
                                                    header: string,
                                                    i: number
                                                ) => (
                                                    <th
                                                        key={
                                                            i
                                                        }
                                                    >
                                                        {
                                                            header
                                                        }
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {item.data.rows?.map(
                                            (
                                                row: string[],
                                                rowIndex: number
                                            ) => (
                                                <tr
                                                    key={
                                                        rowIndex
                                                    }
                                                >
                                                    {row.map(
                                                        (
                                                            cell,
                                                            colIndex
                                                        ) => (
                                                            <td
                                                                key={
                                                                    colIndex
                                                                }
                                                            >
                                                                {
                                                                    cell
                                                                }
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        );

                    default:
                        return null;
                }
            })}
        </main>
    );
}