'use client';
import React from 'react';
import {
    Row,
    Col,
    Accordion
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';

const ProductDetails=()=>{
    return(
        <>
            <Accordion defaultActiveKey={['0','1','2','3']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{margin:'0',padding:"0",fontSize:'20px'}}>
                        <Image
                        src='/details1.png'
                        height={20}
                        width={20}
                        alt=''
                        />
                        &nbsp;&nbsp;
                        Description
                    </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                    <br/><br/>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <Image
                        src='/details2.png'
                        height={20}
                        width={20}
                        alt=""
                        />
                        &nbsp;&nbsp;
                        Highlighted Ingredients
                    </Accordion.Header>
                    <Accordion.Body>
                    Secret 1.
                    Simultaneous removal of makeup residue and skin impurities.
                    <br/>
                    <br/>
                    Secret 2.
                    Daily exfoliation.
                    Washes away dead skin every day with papain enzyme for a brighter complexion.
                    <br/>
                    <br/>
                    Secret 3.
                    Thorough removal of ultrafine particles.
                    Clears the pores completely with Micro Beads specialized for absorbing ultrafine particles.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <Image
                        src='/details3.png'
                        height={20}
                        width={20}
                        alt=""
                        />
                        &nbsp;&nbsp;
                        How To Use
                    </Accordion.Header>
                    <Accordion.Body>
                    Apply a moderate amount on the face and pat lightly for better absorption
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <Image
                        src='/details4.png'
                        height={20}
                        width={20}
                        alt=""
                        />
                        &nbsp;&nbsp;
                        Ingredients
                    </Accordion.Header>
                    <Accordion.Body>
                    Actinidia Chinensis (Kiwi) Fruit Extract, Butylene Glycol, Glycerin, Water, Arbutin, Niacinamide, 1,2-Hexanediol, Ascorbic Acid, Actinidia Chinensis (Kiwi) Seed Oil, Carnitine, 4-Butylresorcinol, Aleuritic Acid, Yeast Extract, Glycoproteins, Sodium Ascorbyl Phosphate, Biotin, Panthenol, Thiamine Hcl, Cyanocobalamin, Riboflavin, Pyridoxine, Folic Acid, Menadione, Bioflavonoids, Tocopheryl Acetate, Glutathione, Betaine, Polyquaternium-51, Glyceryl Polymethacrylate, Sodium Hyaluronate, Lecithin, Polyglyceryl-10 Oleate, PPG-13-Decyltetradeceth-24, Caprylic/Capric Triglyceride, Cyamopsis Tetragonoloba (Guar) Gum, Agar, Xanthan Gum, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Tromethamine, Allantoin, Chitosan, Polymethyl Methacrylate, Ammonium Acryloyldimethyltaurate/Vp Copolymer, Melia Azadirachta Leaf Extract, Melia Azadirachta Flower Extract, Ocimum Sanctum Leaf Extract, Curcuma Longa (Turmeric) Root Extract, Corallina Officinalis Extract, Ethylhexylglycerin, Disodium EDTA, Adenosine, Fragrance, Limonene
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </>
    )
}
export default ProductDetails;