import React, { useEffect, useState } from 'react'

import Grid from '../Grid';

import products from '../../assets/fake-data/products';
import { Link, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';


// ** Utils
import formatMoney from '../../utils/formatCurrency'

const Products = () => {

    // ** Init data for products

    const { pathname } = useLocation();
    const [productsData, setProductsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentIndexOfProduct, setCurrentIndexOfProduct] = useState(0)

    const getProductsData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let index = currentIndexOfProduct === 0 ? currentIndexOfProduct + 25 : currentIndexOfProduct + 10;
                setCurrentIndexOfProduct(index);

                if (products.length < index) {
                    resolve({
                        error: "There are no product!"
                    })
                }
                let data = products.slice(0, index);
                resolve({
                    error: null,
                    data: data
                })
            }, 1500)
        })
    }
    const initData = async () => {
        let data = await getProductsData();

        if (!data.error) {
            setProductsData(data.data);
        }
        else {
            toast.error(data.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontSize: "1.2rem"
                }
            });
        }
        setIsLoading(false);
    }
    useEffect(() => {
        setIsLoading(true)
        initData();
    }, [pathname])

    // ** End of -> Init data for products

    // ** Load more products
    const handleSuccess = (data) => {
        setProductsData(data.data);
        toast.success('Load more products successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                fontSize: "1.2rem"
            }
        });
    }
    const hanleError = (data) => {
        toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                fontSize: "1.2rem"
            }
        });
    }

    const handleLoadMoreProduct = async () => {
        setIsLoading(true);

        let data = await getProductsData();
        data.error ? hanleError(data) : handleSuccess(data)

        setIsLoading(false);
    }
    // ** End of -> Load more products

    return (
        <div className="products">
            <div className="container">
                <Grid
                    col={5}
                    xlCol={4}
                    mdCol={3}
                    mdSmCol={2}
                    smCol={1}
                    gap={18}
                    className="products__main"
                >
                    {
                        productsData?.map((item, index) => (
                            <div className="products__main__item" key={index}>
                                <Link to="coming-soon">
                                    <div className="products__main__item__image">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                </Link>
                                <div className="products__main__item__title">
                                    {item.title}
                                </div>
                                <div className="products__main__item__info">
                                    <div className="products__main__item__info__price">
                                        {formatMoney(item.price, 0)} won
                                    </div>
                                    <div className="products__main__item__info__react">
                                        <i className='bx bxs-heart' ></i>
                                        <span>{item.react}</span>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </Grid>
                <div className="products__btn"
                    onClick={handleLoadMoreProduct}
                >
                    {isLoading ? "LOADING..." : "SEE MORE"}
                </div>
            </div>
        </div>
    )
}

export default Products