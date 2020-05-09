import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Container,
  Header,
  Content,
  GoBack,
  Star,
  Trash,
  List,
  Item,
  ItemLink,
} from './styles';

const Favorite: React.FC = () => {
  const storage = localStorage.getItem('favorites');
  const [favorites, setFavorites] = useState<{ id: string; title: string }[]>(
    () => {
      if (storage) {
        return JSON.parse(storage);
      }
      return [];
    },
  );

  const handleDelete = (id: string): void => {
    const newFavorites = favorites.filter(item => item.id !== id);
    setFavorites(newFavorites);
    toast.warn('Recipe successfully deleted!');
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Container>
      <Header>
        <ItemLink to="/">
          <GoBack />
        </ItemLink>
      </Header>
      <Content>
        <List>
          {favorites.map(favorite => (
            <Item key={favorite.id}>
              <Star />
              <ItemLink to={`/meal/${favorite.id}`}>
                <h3>{favorite.title}</h3>
              </ItemLink>
              <button type="button" onClick={() => handleDelete(favorite.id)}>
                <Trash />
              </button>
            </Item>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Favorite;
