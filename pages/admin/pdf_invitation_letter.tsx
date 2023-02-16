import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import LinkButton from "../../components/LinkButton";

Font.register({ family: "Inter", src: "/assets/font.otf" });

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
  },
  section: {
    color: "blue",
    textAlign: "center",
    margin: 30,
  },
});

const PDFInvitationLetter = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.section}>
          <Text>Hello, welcome to my first generated PDF document!!</Text>
        </View>
      </Page>
    </Document>
  );
};

const PDFView = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      <input type="text" placeholder="Keresztnevg" />
      <br />
      <PDFViewer>
        <PDFInvitationLetter></PDFInvitationLetter>
      </PDFViewer>
      <br />
      <button>
        <PDFDownloadLink
          document={<PDFInvitationLetter />}
          fileName="pdf_invitation_letter.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </button>
    </>
  );
};

export default PDFView;
