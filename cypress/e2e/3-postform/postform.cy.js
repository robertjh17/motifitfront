import React from "react";
import PostForm from "../../../src/components/PostForm";

describe('PostForm', () => {
    beforeEach(() => {
        // Gebruik cy.mount() om de component te monteren
        cy.mount(<PostForm />);
    });

    it('should show the post form', () => {
        cy.get('[data-cy=post-form]').should('exist');
    });

    it('should show the post button', () => {
        cy.get('[data-cy=post-button]').should('exist');
    });

    // Voeg hier andere testen toe
});