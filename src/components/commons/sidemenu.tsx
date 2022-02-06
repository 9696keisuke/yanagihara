// 関連するコンポーネントのみimportのコードをデモコードからコピーしてくる
import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import HomeIcon from "@material-ui/icons/Home";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import { MainTemplateProps } from "../templete/Maintemplete";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../commons/button/PrimaryButton";
import { PersistentDrawerMainContent } from "../commons/persistentDrawerMainContent";
import Button from "@material-ui/core/Button";
import { PAGES } from "../../constants/constants";
import { useState } from "preact/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  })
);

const Sidemenu: React.FC<MainTemplateProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Link to={PAGES[0].url} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={PAGES[0].title} />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List>
        {PAGES.map((page, index) =>
          index > 0 ? (
            <Link to={page.url} className={classes.link}>
              <ListItem button key={page.title}>
                <ListItemIcon>
                  {page.name === "page2" ? (
                    <AccessTimeIcon />
                  ) : page.name === "good" ? (
                    <EmojiPeopleIcon />
                  ) : page.name === "test" ? (
                    <ChildFriendlyIcon />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={page.title} />
              </ListItem>
            </Link>
          ) : (
            ""
          )
        )}
      </List>
    </>
  );
};

export default Sidemenu;
