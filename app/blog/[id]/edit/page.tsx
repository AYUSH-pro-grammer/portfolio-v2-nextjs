'use client'

import styles from './editPage.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const datatype = {
  heading: {
    text: '',
    level: 1,
  },
  paragraph: {
    text: '',
  },
  image: {
    src: '',
    alt: '',
    caption: '',
    width: '100%',
  },
  gallery: {
    images: [] as { src: string; alt: string }[],
    layout: 'grid',
  },
  code: {
    language: 'javascript',
    code: '',
  },
  table: {
    headers: ['Column 1'],
    rows: [['']],
  },
  quote: {
    text: '',
    author: '',
  },
  checklist: {
    items: [{ text: '', checked: false }],
  },
  ordered_list: {
    items: [''],
  },
  unordered_list: {
    items: [''],
  },
  youtube: {
    url: '',
  },
  divider: {
    style: '1px solid #ddd',
    width: '100%',
  },
  timeline: {
    items: [{ title: '', date: '', description: '' }],
  },
  faq: {
    items: [{ question: '', answer: '' }],
  },
  banner: {
    title: '',
    subtitle: '',
    button_text: '',
    button_link: '',
    bg_color: '#f5f5f5',
  },
} as const

type BlockType = keyof typeof datatype

export default function EditPage() {
  const params = useParams()
  const blogId =
    typeof params.id === 'string'
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : ''

  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [addBlock, setAddBlock] = useState(false)
  const [selected, setSelected] = useState<string>('')
  const [option, setOption] = useState<BlockType>('heading')
  const [saving, setSaving] = useState(false)

  const DataBlockOptions = Object.keys(datatype) as BlockType[]

  useEffect(() => {
    const fetchData = async () => {
      if (!blogId) return

      setLoading(true)
      try {
        const resp = await fetch(`https://portfolio-backend-woad-seven.vercel.app/blog/details/${blogId}`, {
          headers: { accept: 'application/json' },
        })

        if (resp.ok) {
          const respData = await resp.json()
          setData(respData)
        } else {
          alert(`Failed to load: ${resp.status}`)
        }
      } catch (e) {
        alert(String(e))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [blogId])

  function togglePopupBlock() {
    setAddBlock((prev) => !prev)
  }

  function updateBlockField(id: string, field: string, value: any) {
    setData((prev) =>
      prev.map((block) =>
        block.id === id
          ? {
              ...block,
              data: {
                ...block.data,
                [field]: value,
              },
            }
          : block
      )
    )
  }

  function updateGalleryImage(
    id: string,
    index: number,
    field: 'src' | 'alt',
    value: string
  ) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const images = [...(block.data.images || [])]
        images[index] = {
          ...(images[index] || { src: '', alt: '' }),
          [field]: value,
        }
        return {
          ...block,
          data: {
            ...block.data,
            images,
          },
        }
      })
    )
  }

  function addGalleryImage(id: string) {
    setData((prev) =>
      prev.map((block) =>
        block.id === id
          ? {
              ...block,
              data: {
                ...block.data,
                images: [
                  ...(block.data.images || []),
                  { src: '', alt: '' },
                ],
              },
            }
          : block
      )
    )
  }

  function removeGalleryImage(id: string, index: number) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const images = [...(block.data.images || [])]
        images.splice(index, 1)
        return {
          ...block,
          data: {
            ...block.data,
            images,
          },
        }
      })
    )
  }

  function updateListItem(id: string, index: number, value: string) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items[index] = value
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function addListItem(id: string) {
    setData((prev) =>
      prev.map((block) =>
        block.id === id
          ? {
              ...block,
              data: {
                ...block.data,
                items: [...(block.data.items || []), ''],
              },
            }
          : block
      )
    )
  }

  function removeListItem(id: string, index: number) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items.splice(index, 1)
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function updateChecklistText(id: string, index: number, value: string) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items[index] = {
          ...(items[index] || { text: '', checked: false }),
          text: value,
        }
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function toggleChecklistChecked(id: string, index: number, checked: boolean) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items[index] = {
          ...(items[index] || { text: '', checked: false }),
          checked,
        }
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function addChecklistItem(id: string) {
    setData((prev) =>
      prev.map((block) =>
        block.id === id
          ? {
              ...block,
              data: {
                ...block.data,
                items: [
                  ...(block.data.items || []),
                  { text: '', checked: false },
                ],
              },
            }
          : block
      )
    )
  }

  function removeChecklistItem(id: string, index: number) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items.splice(index, 1)
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function updateTimelineItem(
    id: string,
    index: number,
    field: 'title' | 'date' | 'description',
    value: string
  ) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items[index] = {
          ...(items[index] || { title: '', date: '', description: '' }),
          [field]: value,
        }
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function addTimelineItem(id: string) {
    setData((prev) =>
      prev.map((block) =>
        block.id === id
          ? {
              ...block,
              data: {
                ...block.data,
                items: [
                  ...(block.data.items || []),
                  { title: '', date: '', description: '' },
                ],
              },
            }
          : block
      )
    )
  }

  function removeTimelineItem(id: string, index: number) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items.splice(index, 1)
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function updateFaqItem(
    id: string,
    index: number,
    field: 'question' | 'answer',
    value: string
  ) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items[index] = {
          ...(items[index] || { question: '', answer: '' }),
          [field]: value,
        }
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function addFaqItem(id: string) {
    setData((prev) =>
      prev.map((block) =>
        block.id === id
          ? {
              ...block,
              data: {
                ...block.data,
                items: [
                  ...(block.data.items || []),
                  { question: '', answer: '' },
                ],
              },
            }
          : block
      )
    )
  }

  function removeFaqItem(id: string, index: number) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const items = [...(block.data.items || [])]
        items.splice(index, 1)
        return {
          ...block,
          data: {
            ...block.data,
            items,
          },
        }
      })
    )
  }

  function updateTableHeader(id: string, index: number, value: string) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const headers = [...(block.data.headers || [])]
        headers[index] = value
        return {
          ...block,
          data: {
            ...block.data,
            headers,
          },
        }
      })
    )
  }

  function updateTableCell(
    id: string,
    rowIndex: number,
    colIndex: number,
    value: string
  ) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const rows = [...(block.data.rows || [])]
        rows[rowIndex] = [...(rows[rowIndex] || [])]
        rows[rowIndex][colIndex] = value
        return {
          ...block,
          data: {
            ...block.data,
            rows,
          },
        }
      })
    )
  }

  function addTableColumn(id: string) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const headers = [...(block.data.headers || [])]
        const rows = (block.data.rows || []).map((row: string[]) => [
          ...row,
          '',
        ])
        headers.push(`Column ${headers.length + 1}`)
        return {
          ...block,
          data: {
            ...block.data,
            headers,
            rows,
          },
        }
      })
    )
  }

  function removeTableColumn(id: string) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const headers = [...(block.data.headers || [])]
        if (headers.length === 0) return block
        const rows = (block.data.rows || []).map((row: string[]) =>
          row.slice(0, -1)
        )
        headers.pop()
        return {
          ...block,
          data: {
            ...block.data,
            headers,
            rows,
          },
        }
      })
    )
  }

  function addTableRow(id: string) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const headers = block.data.headers || []
        const rows = [...(block.data.rows || [])]
        rows.push(headers.map(() => ''))
        return {
          ...block,
          data: {
            ...block.data,
            rows,
          },
        }
      })
    )
  }

  function removeTableRow(id: string) {
    setData((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block
        const rows = [...(block.data.rows || [])]
        if (rows.length === 0) return block
        rows.pop()
        return {
          ...block,
          data: {
            ...block.data,
            rows,
          },
        }
      })
    )
  }

  function moveBlock(id: string, direction: 'up' | 'down') {
    setData((prev) => {
      const index = prev.findIndex((block) => block.id === id)
      if (index === -1) return prev

      const nextIndex = direction === 'up' ? index - 1 : index + 1
      if (nextIndex < 0 || nextIndex >= prev.length) return prev

      const copy = [...prev]
      const temp = copy[index]
      copy[index] = copy[nextIndex]
      copy[nextIndex] = temp

      return copy.map((block, i) => ({
        ...block,
        position: i,
      }))
    })
  }

  function deleteBlock(id: string) {
    setData((prev) =>
      prev
        .filter((block) => block.id !== id)
        .map((block, i) => ({
          ...block,
          position: i,
        }))
    )
    if (selected === id) setSelected('')
  }

  const createBlock = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!blogId) return

    const newBlock = {
      type: option,
      data: structuredClone(datatype[option]),
    }

    try {
      const resp = await fetch(
        `https://portfolio-backend-woad-seven.vercel.app/blog/details/add/${blogId}`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBlock),
        }
      )

      const respData = await resp.json()

      if (resp.ok) {
        setData((prev) => [...prev, respData])
        setAddBlock(false)
      } else {
        console.log(respData)
        alert('Failed to add block')
      }
    } catch (err) {
      alert(String(err))
    }
  }

  const saveData = async () => {
    if (!blogId) return

    try {
      setSaving(true)

      const payload = {
        blocks: data.map((item, index) => ({
          position: index,
          type: item.type,
          data: item.data,
        })),
      }

      const resp = await fetch(
        `https://portfolio-backend-woad-seven.vercel.app/blog/details/replace/${blogId}`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )

      const resData = await resp.json()

      if (resp.ok) {
        alert('Saved')
      } else {
        console.log(resData)
        alert('Failed')
      }
    } catch (e) {
      alert(String(e))
    } finally {
      setSaving(false)
    }
  }

  function getYoutubeEmbedUrl(url: string) {
    try {
      const parsed = new URL(url)

      if (parsed.hostname.includes('youtu.be')) {
        const id = parsed.pathname.replace('/', '')
        return `https://www.youtube.com/embed/${id}`
      }

      const videoId = parsed.searchParams.get('v')
      if (videoId) return `https://www.youtube.com/embed/${videoId}`

      const parts = parsed.pathname.split('/').filter(Boolean)
      const shortId = parts[parts.length - 1]
      if (shortId) return `https://www.youtube.com/embed/${shortId}`

      return ''
    } catch {
      return ''
    }
  }

  function renderBlock(item: any) {
    switch (item.type) {
      case 'heading':
        return selected === item.id ? (
          <h1
            contentEditable
            suppressContentEditableWarning
            className={styles.editableHeading}
            onBlur={(e) => {
              updateBlockField(
                item.id,
                'text',
                e.currentTarget.textContent || ''
              )
              setSelected('')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                ;(e.currentTarget as HTMLElement).blur()
              }
            }}
          >
            {item.data.text}
          </h1>
        ) : (
          <h1
            className={styles.heading}
            onDoubleClick={() => setSelected(item.id)}
          >
            {item.data.text}
          </h1>
        )

      case 'paragraph':
        return selected === item.id ? (
          <p
            contentEditable
            suppressContentEditableWarning
            className={styles.editableParagraph}
            onBlur={(e) => {
              updateBlockField(item.id, 'text', e.currentTarget.innerText)
              setSelected('')
            }}
          >
            {item.data.text}
          </p>
        ) : (
          <p
            className={styles.paragraph}
            onDoubleClick={() => setSelected(item.id)}
          >
            {item.data.text}
          </p>
        )

      case 'image':
        return (
          <div className={styles.imageBlock}>
            <img
              src={item.data.src}
              alt={item.data.alt}
              className={styles.imageData}
              style={{
                width:
                  item.data.width && item.data.width !== 'full'
                    ? item.data.width
                    : '100%',
              }}
            />

            {item.data.caption ? (
              <div className={styles.caption}>{item.data.caption}</div>
            ) : null}

            {selected === item.id ? (
              <div className={styles.inlineForm}>
                <input
                  type="text"
                  value={item.data.src || ''}
                  onChange={(e) =>
                    updateBlockField(item.id, 'src', e.target.value)
                  }
                  placeholder="Image URL"
                />
                <input
                  type="text"
                  value={item.data.alt || ''}
                  onChange={(e) =>
                    updateBlockField(item.id, 'alt', e.target.value)
                  }
                  placeholder="Alt text"
                />
                <input
                  type="text"
                  value={item.data.caption || ''}
                  onChange={(e) =>
                    updateBlockField(item.id, 'caption', e.target.value)
                  }
                  placeholder="Caption"
                />
                <input
                  type="text"
                  value={item.data.width || ''}
                  onChange={(e) =>
                    updateBlockField(item.id, 'width', e.target.value)
                  }
                  placeholder="Width e.g. 100%, 420px"
                />
              </div>
            ) : null}
          </div>
        )

      case 'gallery':
        return (
          <div className={styles.galleryBlock}>
            <div className={styles.galleryGrid}>
              {(item.data.images || []).map((img: any, i: number) => (
                <div key={i} className={styles.galleryCard}>
                  <img
                    src={img.src}
                    alt={img.alt || `gallery-${i}`}
                    className={styles.galleryImage}
                  />
                </div>
              ))}
            </div>

            {selected === item.id ? (
              <div className={styles.galleryEditor}>
                {(item.data.images || []).map((img: any, i: number) => (
                  <div key={i} className={styles.galleryItemEditor}>
                    <input
                      type="text"
                      value={img.src || ''}
                      onChange={(e) =>
                        updateGalleryImage(item.id, i, 'src', e.target.value)
                      }
                      placeholder="Image URL"
                    />
                    <input
                      type="text"
                      value={img.alt || ''}
                      onChange={(e) =>
                        updateGalleryImage(item.id, i, 'alt', e.target.value)
                      }
                      placeholder="Alt text"
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(item.id, i)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button type="button" onClick={() => addGalleryImage(item.id)}>
                  Add image
                </button>
              </div>
            ) : null}
          </div>
        )

      case 'code':
        return selected === item.id ? (
          <div className={styles.codeBlock}>
            <input
              type="text"
              value={item.data.language || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'language', e.target.value)
              }
              placeholder="Language"
              className={styles.codeLanguage}
            />
            <textarea
              value={item.data.code || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'code', e.target.value)
              }
              className={styles.codeTextarea}
              spellCheck={false}
            />
          </div>
        ) : (
          <pre
            className={styles.codePreview}
            onDoubleClick={() => setSelected(item.id)}
          >
            <code>{item.data.code}</code>
          </pre>
        )

      case 'quote':
        return selected === item.id ? (
          <div className={styles.quoteBlock}>
            <textarea
              value={item.data.text || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'text', e.target.value)
              }
              placeholder="Quote text"
              className={styles.quoteTextarea}
            />
            <input
              type="text"
              value={item.data.author || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'author', e.target.value)
              }
              placeholder="Author"
            />
          </div>
        ) : (
          <blockquote
            className={styles.quotePreview}
            onDoubleClick={() => setSelected(item.id)}
          >
            <p>{item.data.text}</p>
            <footer>{item.data.author}</footer>
          </blockquote>
        )

      case 'checklist':
        return (
          <div className={styles.listBlock}>
            <ul className={styles.checklistList}>
              {(item.data.items || []).map((entry: any, i: number) => (
                <li key={i} className={styles.listItem}>
                  <input
                    type="checkbox"
                    checked={!!entry.checked}
                    onChange={(e) =>
                      toggleChecklistChecked(item.id, i, e.target.checked)
                    }
                    disabled={selected !== item.id}
                  />

                  {selected === item.id ? (
                    <input
                      type="text"
                      value={entry.text || ''}
                      onChange={(e) =>
                        updateChecklistText(item.id, i, e.target.value)
                      }
                      className={styles.listInput}
                    />
                  ) : (
                    <span onDoubleClick={() => setSelected(item.id)}>
                      {entry.text}
                    </span>
                  )}

                  {selected === item.id ? (
                    <button
                      type="button"
                      onClick={() => removeChecklistItem(item.id, i)}
                    >
                      Remove
                    </button>
                  ) : null}
                </li>
              ))}
            </ul>

            {selected === item.id ? (
              <button type="button" onClick={() => addChecklistItem(item.id)}>
                Add item
              </button>
            ) : null}
          </div>
        )

      case 'ordered_list':
        return (
          <div className={styles.listBlock}>
            <ol className={styles.list}>
              {(item.data.items || []).map((text: string, i: number) => (
                <li key={i} className={styles.listItem}>
                  {selected === item.id ? (
                    <input
                      type="text"
                      value={text}
                      onChange={(e) =>
                        updateListItem(item.id, i, e.target.value)
                      }
                      className={styles.listInput}
                    />
                  ) : (
                    <span onDoubleClick={() => setSelected(item.id)}>
                      {text}
                    </span>
                  )}

                  {selected === item.id ? (
                    <button
                      type="button"
                      onClick={() => removeListItem(item.id, i)}
                    >
                      Remove
                    </button>
                  ) : null}
                </li>
              ))}
            </ol>

            {selected === item.id ? (
              <button type="button" onClick={() => addListItem(item.id)}>
                Add item
              </button>
            ) : null}
          </div>
        )

      case 'unordered_list':
        return (
          <div className={styles.listBlock}>
            <ul className={styles.list}>
              {(item.data.items || []).map((text: string, i: number) => (
                <li key={i} className={styles.listItem}>
                  {selected === item.id ? (
                    <input
                      type="text"
                      value={text}
                      onChange={(e) =>
                        updateListItem(item.id, i, e.target.value)
                      }
                      className={styles.listInput}
                    />
                  ) : (
                    <span onDoubleClick={() => setSelected(item.id)}>
                      {text}
                    </span>
                  )}

                  {selected === item.id ? (
                    <button
                      type="button"
                      onClick={() => removeListItem(item.id, i)}
                    >
                      Remove
                    </button>
                  ) : null}
                </li>
              ))}
            </ul>

            {selected === item.id ? (
              <button type="button" onClick={() => addListItem(item.id)}>
                Add item
              </button>
            ) : null}
          </div>
        )

      case 'youtube': {
        const embedUrl = getYoutubeEmbedUrl(item.data.url || '')

        return selected === item.id ? (
          <div className={styles.youtubeBlock}>
            <input
              type="text"
              value={item.data.url || ''}
              onChange={(e) => updateBlockField(item.id, 'url', e.target.value)}
              placeholder="YouTube URL"
            />
          </div>
        ) : (
          <div
            className={styles.youtubePreview}
            onDoubleClick={() => setSelected(item.id)}
          >
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="YouTube preview"
                className={styles.youtubeFrame}
                allowFullScreen
              />
            ) : (
              <a href={item.data.url} target="_blank" rel="noreferrer">
                {item.data.url || 'Add YouTube link'}
              </a>
            )}
          </div>
        )
      }

      case 'divider':
        return selected === item.id ? (
          <div className={styles.dividerEditor}>
            <input
              type="text"
              value={item.data.style || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'style', e.target.value)
              }
              placeholder='Border style e.g. 1px solid #ddd'
            />
            <input
              type="text"
              value={item.data.width || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'width', e.target.value)
              }
              placeholder='Width e.g. 100%'
            />
          </div>
        ) : (
          <hr
            className={styles.divider}
            style={{
              borderTop: item.data.style || '1px solid #ddd',
              width: item.data.width || '100%',
            }}
            onDoubleClick={() => setSelected(item.id)}
          />
        )

      case 'timeline':
        return (
          <div className={styles.timelineBlock}>
            {(item.data.items || []).map((entry: any, i: number) => (
              <div key={i} className={styles.timelineItem}>
                <input
                  type="text"
                  value={entry.title || ''}
                  onChange={(e) =>
                    updateTimelineItem(item.id, i, 'title', e.target.value)
                  }
                  placeholder="Title"
                />
                <input
                  type="text"
                  value={entry.date || ''}
                  onChange={(e) =>
                    updateTimelineItem(item.id, i, 'date', e.target.value)
                  }
                  placeholder="Date"
                />
                <textarea
                  value={entry.description || ''}
                  onChange={(e) =>
                    updateTimelineItem(
                      item.id,
                      i,
                      'description',
                      e.target.value
                    )
                  }
                  placeholder="Description"
                />
                {selected === item.id ? (
                  <button
                    type="button"
                    onClick={() => removeTimelineItem(item.id, i)}
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            ))}

            {selected === item.id ? (
              <button type="button" onClick={() => addTimelineItem(item.id)}>
                Add item
              </button>
            ) : null}
          </div>
        )

      case 'faq':
        return (
          <div className={styles.faqBlock}>
            {(item.data.items || []).map((entry: any, i: number) => (
              <div key={i} className={styles.faqItem}>
                {selected === item.id ? (
                  <>
                    <input
                      type="text"
                      value={entry.question || ''}
                      onChange={(e) =>
                        updateFaqItem(item.id, i, 'question', e.target.value)
                      }
                      placeholder="Question"
                    />
                    <textarea
                      value={entry.answer || ''}
                      onChange={(e) =>
                        updateFaqItem(item.id, i, 'answer', e.target.value)
                      }
                      placeholder="Answer"
                    />
                    <button
                      type="button"
                      onClick={() => removeFaqItem(item.id, i)}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <details>
                    <summary>{entry.question}</summary>
                    <p>{entry.answer}</p>
                  </details>
                )}
              </div>
            ))}

            {selected === item.id ? (
              <button type="button" onClick={() => addFaqItem(item.id)}>
                Add FAQ
              </button>
            ) : null}
          </div>
        )

      case 'banner':
        return selected === item.id ? (
          <div className={styles.bannerEditor}>
            <input
              type="text"
              value={item.data.title || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'title', e.target.value)
              }
              placeholder="Title"
            />
            <input
              type="text"
              value={item.data.subtitle || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'subtitle', e.target.value)
              }
              placeholder="Subtitle"
            />
            <input
              type="text"
              value={item.data.button_text || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'button_text', e.target.value)
              }
              placeholder="Button text"
            />
            <input
              type="text"
              value={item.data.button_link || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'button_link', e.target.value)
              }
              placeholder="Button link"
            />
            <input
              type="text"
              value={item.data.bg_color || ''}
              onChange={(e) =>
                updateBlockField(item.id, 'bg_color', e.target.value)
              }
              placeholder="Background color"
            />
          </div>
        ) : (
          <section
            className={styles.bannerPreview}
            style={{ backgroundColor: item.data.bg_color || '#f5f5f5' }}
            onDoubleClick={() => setSelected(item.id)}
          >
            <h2>{item.data.title}</h2>
            <p>{item.data.subtitle}</p>
            <button type="button">{item.data.button_text || 'Button'}</button>
          </section>
        )

      case 'table': {
        const headers = item.data.headers || []
        const rows = item.data.rows || []

        return selected === item.id ? (
          <div className={styles.tableBlock}>
            <div className={styles.tableToolbar}>
              <button type="button" onClick={() => addTableColumn(item.id)}>
                Add column
              </button>
              <button type="button" onClick={() => removeTableColumn(item.id)}>
                Remove column
              </button>
              <button type="button" onClick={() => addTableRow(item.id)}>
                Add row
              </button>
              <button type="button" onClick={() => removeTableRow(item.id)}>
                Remove row
              </button>
            </div>

            <div className={styles.tableEditor}>
              <div className={styles.tableRow}>
                {headers.map((header: string, i: number) => (
                  <input
                    key={i}
                    type="text"
                    value={header}
                    onChange={(e) =>
                      updateTableHeader(item.id, i, e.target.value)
                    }
                    className={styles.tableHeadInput}
                    placeholder={`Header ${i + 1}`}
                  />
                ))}
              </div>

              {rows.map((row: string[], rowIndex: number) => (
                <div key={rowIndex} className={styles.tableRow}>
                  {headers.map((_, colIndex: number) => (
                    <input
                      key={colIndex}
                      type="text"
                      value={row[colIndex] || ''}
                      onChange={(e) =>
                        updateTableCell(
                          item.id,
                          rowIndex,
                          colIndex,
                          e.target.value
                        )
                      }
                      className={styles.tableCellInput}
                      placeholder={`Row ${rowIndex + 1}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={styles.tablePreviewWrap}
            onDoubleClick={() => setSelected(item.id)}
          >
            <table className={styles.tablePreview}>
              <thead>
                <tr>
                  {headers.map((header: string, i: number) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row: string[], rowIndex: number) => (
                  <tr key={rowIndex}>
                    {row.map((cell: string, colIndex: number) => (
                      <td key={colIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }

      default:
        return (
          <div className={styles.unsupportedBlock}>
            Unsupported block: {item.type}
          </div>
        )
    }
  }

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.cont}>


                {addBlock ? (
          <div className={styles.popUpCont} onClick={togglePopupBlock}>
            <div
              className={styles.popUpData}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Add block</h3>

              <form onSubmit={createBlock} className={styles.popupForm}>
                <label>Type</label>
                <select
                  value={option}
                  onChange={(e) => setOption(e.target.value as BlockType)}
                >
                  {DataBlockOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <button type="submit">Create</button>
              </form>
            </div>
          </div>
        ) : null}



      <aside className={styles.editPage}>
        <h2>Edit Page</h2>

        <button type="button" className={styles.sidebarButton} onClick={togglePopupBlock}>
          Add New Components
        </button>



        <div className={styles.addButton}>
          {DataBlockOptions.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setOption(type)
                setAddBlock(true)
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </aside>

      <aside className={styles.otherAside}>
        <div className={styles.topBar}>
          <button type="button" onClick={saveData}>
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>

        {data.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.blockWrap} ${
              selected === item.id ? styles.blockActive : ''
            }`}
          >
            <div className={styles.blockToolbar}>
              <button
                type="button"
                onClick={() => moveBlock(item.id, 'up')}
                disabled={index === 0}
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => moveBlock(item.id, 'down')}
                disabled={index === data.length - 1}
              >
                ↓
              </button>
              <button type="button" onClick={() => setSelected(item.id)}>
                Edit
              </button>
              <button type="button" onClick={() => deleteBlock(item.id)}>
                Delete
              </button>
            </div>

            <div className={styles.blockContent}>{renderBlock(item)}</div>
          </div>
        ))}
      </aside>
    </div>
  )
}