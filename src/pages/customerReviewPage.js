import Banner from "../components/Banner/banner";
import CustomerReviewForm from "../components/CustomerReviewForm/customerReviewForm";
import CustomerReviewViewPage from "../components/CustomerReviewForm/customerReviewViewPage";
import React, { useState, useEffect } from 'react';
import database from "../services/firebase";

const CustomerReviewPage = () => {
    useEffect(() => {
        console.log("Testing Starts");

        (async () => {
            await database.ref("reviews")
                .limitToLast(3).get()
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log("Fetch snap");
                        console.log(snapshot.val());
                    } else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        })();
        console.log("Testing Ends");
    }, []);
    
    return(
        <>
            <Banner activePageName={'Customer Review'}/>
            <CustomerReviewForm/>
        </>
    )
}

export default CustomerReviewPage;