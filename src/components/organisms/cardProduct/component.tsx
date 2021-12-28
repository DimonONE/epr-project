import React, { FC, useMemo } from 'react';
import styled from './style.module.scss';
import img from '../../../images/Rectangle.png';
import Color from '../../molecules/colors/component';
import Paginate from '../../molecules/paginate/component';
import TitleContent from '../../molecules/titles/component';
import ButtonsEvents from '../buttonsEvents/component';
import Share from '../../molecules/share/component';
import Size from '../../atoms/sizes/component';

interface ISize { id: number, size: string }
interface IColor { id: number, label: string, color: string }

interface CardProductType<T> {
    id: number
    sizes: T
    colors: T
    image: string
}

const CardProduct: FC = () => {
    const [selectedColor, setSelectedColor] = React.useState<number | null>(null);
    const [selectedSize, setSelectedSize] = React.useState<number | null>(null);
    const [wholeScreen, setWholeScreen] = React.useState<boolean>(false);

    const sizes = useMemo(() => [{ id: 1, size: 'XL' }, { id: 2, size: 'XXL' }, { id: 3, size: 'XXXL' }, { id: 4, size: 'MEGAXL', disabled: true }], []);
    const colors = useMemo(() => [
        { id: 1, label: 'Green', color: 'rgba(57, 182, 59, 1)' },
        { id: 2, label: 'Red', color: 'rgba(237, 42, 84, 1)' },
        { id: 3, label: 'Yellow', color: 'rgba(255, 255, 0, 1)' },
        { id: 4, label: 'White', color: 'rgba(255, 255, 255, 255)' }],
         []);
    const datas: CardProductType<ISize[] | IColor[]>[] = [
        { id: 1, image: img, sizes, colors },
        // { id: 2, image: img, sizes, colors },
        // { id: 3, image: img, sizes, colors },
        // { id: 4, image: img, sizes, colors },
        // { id: 5, image: img, sizes, colors },
    ];

    const getSelectColorHanlder = (id: number) => () => {
        setSelectedColor(id);
    };

    const getSelectSizeHanlder = (id: number) => () => {
        setSelectedSize(id);
    };
    return (
      <>
        {
                datas.map((card) => (
                  <div
                    key={card.id}
                    className={styled.product}
                    onMouseLeave={() => setWholeScreen(false)}
                  >
                    <div className={styled.image}>
                      <img src={card.image} alt="img" />
                    </div>
                    {wholeScreen && (
                      <Share className={styled.show} />
                      )}

                    <ButtonsEvents
                      className={styled.show}
                      wholeScreen={wholeScreen}
                      setWholeScreen={setWholeScreen}
                    />

                    <div className={styled.productFooter}>
                      <TitleContent
                        title="White & Black Single Breasted Blazer & Pants"
                        price="$301.88"
                        oldPrice=" $350.99"
                      />
                      <div className={styled.show}>
                        <div className={styled.showContent}>
                          <Paginate
                            array={colors}
                            Element={(props) => (
                              <>
                                <Color
                                  onClick={getSelectColorHanlder(props.id)}
                                  selected={props.id === selectedColor}
                                  {...props}
                                />
                              </>
                            )}
                          />
                          <Paginate
                              // @ts-ignore
                            array={sizes}
                            countItem={2}
                            Element={(props) => (
                              <>
                                <Size
                                  key={props.id}
                                  disabled={props.disabled}
                                  onClick={getSelectSizeHanlder(props.id)}
                                  selected={props.id === selectedSize}
                                >
                                  {props.size}
                                </Size>
                              </>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            }

      </>
    );
};

export default CardProduct;
