import React from "react";
import Router from 'next/router';

const redirect = (ctx: any, target: string) => {
    if (ctx.res) {
        ctx.res.writeHead(303, { location: target });
        ctx.res.end();
    } else {
        Router.replace(target);
    }
}

export const withAuth = (Component: any) => {
    return class AuthCompoent extends React.Component {
        static async getInitialProps(ctx: any) {
            if (ctx.res) return redirect(ctx, '/');
            const user: any = localStorage.getItem('user');
            if (!user && !user.facebookId && user.faceebookId !== process.env.adminFacebookId) return redirect(ctx, '/');
        };
        render() {
            return <Component {...this.props} />
        }
    }
}