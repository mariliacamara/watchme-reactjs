import { useEffect, useState } from 'react';

interface SelectedGenreProps {
 title: string,
}

export function Header(selectedGenre: SelectedGenreProps) {
  return (
   <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
   </header>
  )
}