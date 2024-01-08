import React, { useEffect, useState } from 'react';
import '../nullstyle.css';
import './styles/mainPage.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../Redux/Store';
import { loadFiles, getFile } from '../../Features/Files/filesSlice';

function MainPage(): JSX.Element {
  let fileName = '';
  const { files } = useSelector((store: RootState) => store.files);
  const [file, setFile] = useState('');

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadFiles(file));
  }, [file]);

  function findFile(id: number): void {
    dispatch(getFile(Number(id)));
  }

  return (
    <div className="container">
      <div className="title">
        Проверка компаний в реестрах недобросовестных поставщиков
      </div>
      <div className="loading">
        <div className="loading__text text">
          Загрузить файл со списком поставщиков
        </div>
        <div className="loading__input">
          <input
            type="file"
            className="file-input"
            onChange={(e) => {
              fileName = e.target.value;
            }}
          />
        </div>
      </div>
      <div className="verification">
        <div className="verification__text text">
          Проверить в следующих реестрах:
        </div>
        <div className="verification__checklist">
          <div className="checklist__item">
            <input className="checklist__input" type="checkbox" />
            <div className="checklist__text">
              Федеральный реестр недобросовестных поставщиков
            </div>
          </div>
          <div className="checklist__item">
            <input className="checklist__input" type="checkbox" />
            <div className="checklist__text">
              Отраслевой реестр недобросовестных поставщиков
            </div>
          </div>
        </div>
        <button
          className="verification__btn btn"
          type="button"
          onClick={() => setFile(fileName)}
        >
          Проверить
        </button>
      </div>
      <div className="reports">
        <div className="reports__title">Скачать отчет</div>
        <div className="reports__list">
          {files && files.length > 0 ? (
            files.map((item) => (
              <div
                key={item.id}
                className="reports__item"
                onClick={() => findFile(item.id)}
              >
                {item.filename}
              </div>
            ))
          ) : (
            <div className="reports__not-found">Ничего не найдено</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
