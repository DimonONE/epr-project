import React, { useMemo } from 'react';
import styled from './style.module.scss';
import img from '../../../images/Rectangle.png';
import Color from '../../molecules/colors/component';
import Size from '../../atoms/sizes/component';
import ContentArrows from '../../molecules/arrows/component';
import TitleContent from '../../molecules/titles/component';
import ButtonsEvents from '../buttonsEvents/component';

interface ISize { id: number, size: string }
interface IColor { id: number, label: string, color: string }

interface CardProductType<T> {
    id: number
    sizes: T
    colors: T
    image: string
}

const CerdProduct = () => {
    const [selectedSize, setSelectedSize] = React.useState<number | null>(null);
    const [selectedColor, setSelectedColor] = React.useState<number | null>(null);

    const sizes = useMemo(() => [{ id: 1, size: 'XL' }, { id: 2, size: 'XXL' }, { id: 3, size: 'XXXL' }, { id: 4, size: 'MEGAXL', disabled: true }], []);
    const colors = useMemo(() => [{ id: 1, label: 'Green', color: 'rgba(57, 182, 59, 1)' }, { id: 2, label: 'Red', color: 'rgba(237, 42, 84, 1)' }, { id: 3, label: 'Yellow', color: 'rgba(255, 255, 0, 1)' }], []);
    const datas: CardProductType<ISize[] | IColor[]>[] = [
        { id: 1, image: img, sizes, colors },
        // { id: 2, image: img, sizes, colors },
        // { id: 3, image: img, sizes, colors },
        // { id: 4, image: img, sizes, colors },
    ];

    const getSelectColorHanlder = (id: number) => () => {
        setSelectedColor(id);
    };

    const getSelectSizeHanlder = (id: number) => () => {
        setSelectedSize(id);
    };

    console.log(datas);

    return (
      <>
        {
                datas.map((card) => (
                  <div className={styled.product}>
                    <div className={styled.image}>
                      <img src={card.image} alt="img" />
                    </div>

                    <div className={styled.show}>
                      <ButtonsEvents />
                    </div>

                    <div className={styled.productFooter}>
                      <TitleContent
                        title="White & Black Single Breasted Blazer & Pants"
                        price="$301.88"
                        oldPrice=" $350.99"
                      />
                      <div className={styled.show}>
                        <div className={styled.showContent}>
                          <ContentArrows>
                            {
                                colors.map(({ id, ...props }) => (
                                  <Color
                                    key={id}
                                    onClick={getSelectColorHanlder(id)}
                                    selected={id === selectedColor}
                                    {...props}
                                  />
                                ))
                             }
                          </ContentArrows>
                        </div>

                        {/* <ContentArrows> */}
                        {/*  { */}
                        {/*                    sizes.map(({ id, size, disabled }) => ( */}
                        {/*                      <Size */}
                        {/*                        className="ml-5-vw" */}
                        {/*                        key={id} */}
                        {/*                        disabled={disabled} */}
                        {/*                        onClick={getSelectSizeHanlder(id)} */}
                        {/*                        selected={id === selectedSize} */}
                        {/*                      > */}
                        {/*                        {size} */}
                        {/*                      </Size> */}
                        {/*                    )) */}
                        {/*                } */}
                        {/* </ContentArrows> */}
                      </div>
                    </div>
                  </div>
                ))
            }

      </>
    );
};

export default CerdProduct;
