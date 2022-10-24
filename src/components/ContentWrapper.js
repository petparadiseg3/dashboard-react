import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TableInfo from './TableInfo';
import { useState, useEffect } from "react";

function ContentWrapper() {

    const [tableRowsData, setTableRowsData] = useState(["..."]);

    useEffect(() => {
        async function dataProducts() {
            const response = await fetch("http://localhost:3001/api/products");
            const data = await response.json();
            setTableRowsData(data.products);
        }
        dataProducts();
    }, []);

    // como segundo parametro le paso un array vacio para que se ejecute solo una vez



    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Table>
                        {tableRowsData.map((row, i) => (
                            <TableInfo name={row.name} description={row.descriptions}  category={row.category}   key={row + i} />
                        ))}
                    </Table>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;