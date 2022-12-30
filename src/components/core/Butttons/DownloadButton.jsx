import React from 'react'
import '../../../styles/core/buttons/DownloadButton.scss'
export default function DownloadButton({ name, action }) {
  return (
    <button class="download-button" role="button" onClick={action}>{name}</button>
  )
}