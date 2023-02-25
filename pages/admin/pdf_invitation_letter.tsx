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
    padding: 40,
  },
  section: {
    color: "blue",
    textAlign: "center",
    margin: 30,
  },
  title_view: {
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    left: "30%",
    fontWeight: "bold",
    position: "absolute",
    top: "10%",
  },
  subtitle: {
    fontSize: "15px",
    left: "30%",
    position: "absolute",
    top: "60%",
  },
  headerimg: {
    marginLeft: "15%",
    width: "13%",
    position: "relative",
  },
  data: {
    marginTop: "8%",
    fontSize: "12px",
    marginLeft: "10px",
  },
  information: {
    textAlign: "center",
    fontSize: "12px",
    marginTop: "20px",
  },
});

const PDFInvitationLetter = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.title_view}>
          {/* <Image src="http://localhost:3000/images/pe_cimer.png"></Image> */}
          <Image
            style={styles.headerimg}
            src="http://localhost:3000/pe_cimer.png"
          ></Image>
          <Text style={styles.title}>Pannon Egyetem</Text>
          <Text style={styles.subtitle}>
            Informatikai Tudományok Doktori Iskola
          </Text>
        </View>
        <View style={styles.data}>
          <Text>[Név]</Text>
          <Text>[Egyetemi beosztás]</Text>
          <Text>[Egyetem neve]</Text>
          <Text>[Tanszék neve]</Text>
          <Text>[Helyben/Távolléti]</Text>
        </View>
        <View style={styles.information}>
          <Text>Tisztelt [Egyetemi beosztás] Úr!</Text>
          <Text
            style={{
              textAlign: "justify",
              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            [Név], a Pannon Egyetem Informatikai Tudományok Doktori Iskola
            [félév] féléves PhD hallgatója (témavezetők: [], []) jelentkezett
            komplex vizsgára. A komplex vizsgára javasolt bizottságot a Doktori
            Iskola Tanácsa elfogadta. A Doktori Iskola Tanácsa javaslatát
            elfogadva kérem, hogy az alábbiakban részletezett Komplex Vizsga
            Bizottságba történő felkérést elfogadni, és a vizsga
            lebonyolításában részt venni szíveskedjék.
          </Text>
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
